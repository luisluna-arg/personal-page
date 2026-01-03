# Relaunch script for gym-app-web
# This script builds the application and then starts the containers

# Get the script directory and navigate to the project root
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptDir

Write-Host "Building the application..." -ForegroundColor Green
# Run npm build in project root directory
Push-Location "$projectRoot"
try {
    # Check if node_modules exists and package-lock.json hasn't changed
    $nodeModulesPath = "$projectRoot\node_modules"
    $lockFilePath = "$projectRoot\package-lock.json"
    $lockHashFile = "$projectRoot\node_modules\.package-lock-hash"
    
    $needsInstall = $true
    if (Test-Path $nodeModulesPath) {
        if (Test-Path $lockFilePath) {
            $currentHash = (Get-FileHash $lockFilePath -Algorithm MD5).Hash
            if (Test-Path $lockHashFile) {
                $savedHash = Get-Content $lockHashFile -Raw
                if ($currentHash -eq $savedHash.Trim()) {
                    Write-Host "Dependencies up to date, skipping npm install..." -ForegroundColor Yellow
                    $needsInstall = $false
                }
            }
        }
    }
    
    if ($needsInstall) {
        Write-Host "Installing dependencies..." -ForegroundColor Cyan
        # Use npm ci with performance optimizations
        # --prefer-offline: use cached packages when possible
        # --no-audit: skip security audit (faster)
        # --no-fund: skip funding messages
        # --ignore-scripts: skip postinstall scripts (if safe for your project)
        $env:npm_config_loglevel = "error"
        npm ci --legacy-peer-deps --prefer-offline --no-audit --no-fund
        if ($LASTEXITCODE -ne 0) {
            Write-Host "npm ci failed, falling back to npm install..." -ForegroundColor Yellow
            npm install --legacy-peer-deps --prefer-offline --no-audit --no-fund
            if ($LASTEXITCODE -ne 0) {
                Write-Host "npm install failed! Exiting..." -ForegroundColor Red
                exit 1
            }
        }
        # Save the hash of package-lock.json
        if (Test-Path $lockFilePath) {
            $currentHash = (Get-FileHash $lockFilePath -Algorithm MD5).Hash
            $currentHash | Out-File -FilePath $lockHashFile -NoNewline
        }
    }
    
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed! Exiting..." -ForegroundColor Red
        exit 1
    }
} finally {
    Pop-Location
}

Write-Host "Starting Docker containers..." -ForegroundColor Green
# Run docker compose in infra/local directory without changing current location
Push-Location "$projectRoot\infra\local"
try {
    # Only rebuild if Dockerfile or package.json changed
    # Use --build only when necessary, skip --force-recreate for faster restarts
    docker compose up -d --build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Docker compose failed! Exiting..." -ForegroundColor Red
        exit 1
    }
} finally {
    Pop-Location
}

Write-Host "Relaunch completed successfully!" -ForegroundColor Green