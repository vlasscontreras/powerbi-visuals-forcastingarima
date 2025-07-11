# PowerBI Visuals - Forecasting with ARIMA

## Overview
Time series forecasting using the well-known Autoregressive Integrated Moving Average (ARIMA) method. This PowerBI visual supports both seasonal and non-seasonal modeling with customizable algorithm parameters and visual attributes.

## Recent Updates (v2.0.0)

### ✅ **Modernized Technology Stack**
- **TypeScript**: Updated to v5.8.3 with ES2020 target
- **R**: Updated for compatibility with R 4.5.x, 4.4.x, 4.3.x
- **PowerBI Tools**: Updated to v6.1.3 with API version 5.3.0
- **Linting**: Migrated from deprecated TSLint to ESLint

### ✅ **Updated Dependencies**
- **R Packages**: Updated to latest versions
  - forecast, zoo, scales, ggplot2, plotly, caTools
  - reshape2, htmlWidgets, XML
- **Build Tools**: Modern TypeScript compiler with strict mode
- **Code Quality**: ESLint with TypeScript support

### ✅ **Enhanced Configuration**
- Modern tsconfig.json with strict type checking
- Updated pbiviz.json with latest PowerBI API
- Streamlined dependency management

## Requirements

### Desktop Prerequisites
To run R scripts in Power BI Desktop, you must separately install R on your local computer.
- Download R from [Revolution Open](https://mran.revolutionanalytics.com/download/)
- Or from [CRAN Repository](https://cran.r-project.org/bin/windows/base/)

### Supported R Versions
- R 4.5.x ✅ (Latest)
- R 4.4.x ✅
- R 4.3.x ✅

### R Package Dependencies (Auto-installed)
- zoo - Time series infrastructure
- scales - Scale functions for visualization
- forecast - Forecasting functions for time series
- reshape2 - Data reshaping
- plotly - Interactive web graphics
- htmlWidgets - HTML widgets framework
- XML - XML tools
- caTools - Moving window statistics and more

## Features
- **Seasonal and Non-seasonal ARIMA modeling**
- **Interactive parameter controls**
- **Customizable visual attributes**
- **Confidence intervals**
- **Forecasting periods configuration**
- **Modern responsive design**

## Development

### Build Commands
```bash
# Install dependencies
npm install

# Build the visual
npm run build

# Start development server
npm start

# Run linting
npm run lint
```

### Version History
- **v2.0.0**: Modernized with TypeScript 5.8.3, R 4.5.x support, PowerBI API 5.3.0
- **v1.2.1**: Legacy version with R 3.x support

## Support
- **Service**: R-powered custom visual works seamlessly in PowerBI Service
- **Community**: [PowerBI Community](http://community.powerbi.com/)
- **GitHub**: [Project Repository](https://github.com/Microsoft/powerbi-visuals-forcastingarima)

## License
Microsoft © 2025

---

**Note**: This visual has been updated to use the latest TypeScript and R versions. The main forecasting functionality remains in the R script component, ensuring compatibility with modern R environments while providing a modernized development experience.