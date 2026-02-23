# Article Site - Umbraco CMS Solution

A content management system built with **Umbraco CMS** and **ASP.NET Core 10** for managing and displaying article content with a custom admin dashboard.

## Features

- **Custom Article Dashboard**: Real-time display of article statistics and latest articles in the Umbraco backoffice
- **Article Management**: Create, edit, and publish articles through the Umbraco content management interface
- **Responsive Design**: Bootstrap 5-based responsive front-end templates
- **Modern Web Components**: Custom HTML5 Web Components for the admin dashboard
- **RESTful API**: Backend API for serving article data to the dashboard

## Tech Stack

- **.NET**: ASP.NET Core 10 / .NET 10
- **CMS**: Umbraco CMS v17.2.0
- **Frontend**: HTML5, CSS3, Bootstrap 5.3.2
- **Web Components**: Custom HTML5 Web Components (article-dashboard)
- **Database**: Umbraco SQLite (default, configurable)

## Setup Instructions

### Prerequisites

- .NET 10 SDK installed ([Download](https://dotnet.microsoft.com/download/dotnet))
- Visual Studio 2022+ or Visual Studio Code
- Git

### Step 1: Clone and Install Dependencies

# Clone the repository
git clone <https://github.com/Sahil-C137/Umbraco-17-Technical-Assessment.git>
cd ArticleSite

# Restore NuGet packages
dotnet restore


### Step 2: Database Setup
# Umbraco will automatically create the SQLite database on first run
# You can delete the existing database and start fresh if needed
rm Umbraco\Data\Umbraco.sqlite.db


### Step 3: Run the Application
# Development mode with automatic Umbraco setup
dotnet run


### Step 4: Initial Umbraco Configuration

1. Visit `https://localhost:XXXX/umbraco` in your browser
2. Add some articles to test the dashboard

### Step 5: Dashboard Access

Once articles are created, the Article Dashboard will appear:
- Navigate to the **Content** section in Umbraco backoffice
- The **Article Dashboard** will display:
  - Total count of articles
  - List of the 5 most recent articles

## Project Structure

ArticleSite/
├── App_Plugins/
│   └── ArticleDashboard/
│       ├── dashboard.js          # Custom Web Component for dashboard
│       └── umbraco-package.json   # Umbraco extension manifest
├── Controllers/
│   └── ArticleStatsController.cs  # API endpoint for article data
├── Views/
│   ├── master.cshtml              # Master layout template
│   ├── ArticleList.cshtml         # Article listing page
│   └── Article.cshtml             # Single article detail page
├── Styles/
│   └── main.css                   # Custom stylesheet
├── Models/                        # Data models (folder)
├── ArticleSite.csproj            # Project file
└── README.md                      # This file


## Assumptions Made

1. **Umbraco Setup**: The solution assumes a standard Umbraco CMS v17.2.0 installation with the default SQLite database
2. **Article Document Type**: Articles are stored in Umbraco using a document type named "article" (case-sensitive)
3. **Article Fields**: The Article document type contains at minimum a "Name" field for the title
4. **Authentication**: Admin dashboard access requires Umbraco backoffice authentication
5. **Bootstrap 5.3.2 CDN**: The front-end relies on Bootstrap being served from CDN (internet connection required)
6. **API Endpoint**: The dashboard expects the API endpoint at `/umbraco/management/api/articles`
7. **Web Component Support**: Modern browsers with Web Components support (Chrome, Firefox, Edge, Safari)

## Design Decisions & Trade-offs

### 1. **Custom Web Components for Dashboard**
- **Decision**: Used native HTML5 Web Components instead of a framework
- **Trade-off**: Simpler, framework-agnostic approach vs. less feature parity compared to frameworks like React/Vue
- **Rationale**: Keeps the plugin lightweight and maintainable with minimal dependencies

### 2. **Direct Content Service Queries**
- **Decision**: Backend queries Umbraco's IContentService directly
- **Trade-off**: Simple implementation vs. potential performance issues with large article volumes
- **Rationale**: Adequate for typical article sites; can be optimized with caching if needed

### 3. **CDN-based Bootstrap**
- **Decision**: Bootstrap is loaded from CDN rather than bundled
- **Trade-off**: Faster initial load time vs. external dependency on CDN availability
- **Rationale**: Reduces bundle size; suitable for mostly online usage

### 4. **Limited to 100 Articles per Request**
- **Decision**: API limits results to 100 articles with `.Take(5)` for latest
- **Trade-off**: Simple pagination vs. handling very large datasets
- **Rationale**: Sufficient for typical dashboard use; can be enhanced with proper pagination

### 5. **Error Handling in Dashboard**
- **Decision**: Generic error message shown to user on API failure
- **Trade-off**: Better UX vs. harder debugging
- **Rationale**: Prevents exposing internal error details to users

## API Reference

### Get Article Statistics


GET /umbraco/management/api/articles


**Response:**
json
{
  "total": 42,
  "latest": [
    "Welcome to our Blog",
    "Getting Started with Umbraco",
    "Building Custom Dashboards",
    "Best Practices for Content Management",
    "Advanced Umbraco Techniques"
  ]
}


## Future Improvements (With More Time)

### 1. **Performance Optimization**
- Implement caching with `IMemoryCache` to reduce database queries
- Add output caching for the API endpoint (5-10 minute TTL)
- Consider database indexing on content type lookups

### 2. **Enhanced Dashboard Features**
- Add article creation date sorting
- Implement filtering (by status, category, author)
- Show article metrics: views, comments, publication date
- Add quick-access links to edit articles
- Real-time statistics with periodic refresh

### 3. **Pagination & Scalability**
- Implement proper pagination in the API
- Support dynamic page size configuration
- Add search/filter capabilities
- Consider moving to a dedicated search solution (Examine, Elasticsearch)

### 4. **Testing Coverage**
- Add unit tests for `ArticleStatsController`
- Add integration tests for the Umbraco plugin
- Add Web Component tests for the dashboard UI
- End-to-end tests for the complete workflow

### 5. **Security Enhancements**
- Add rate limiting to the API endpoint
- Implement request validation
- Add CORS policy configuration if needed
- Add audit logging for article access

### 6. **UI/UX Improvements**
- Add loading states and animations
- Implement error boundaries with retry mechanisms
- Add sorting/filtering in the latest articles display
- Responsive design for smaller screens (mobile dashboard)
- Dark mode support
- Accessibility improvements (WCAG 2.1 compliance)


### 9. **Feature Additions**
- Article categories/tags support
- User/author information display
- Article preview functionality
- Scheduled publication support
- Draft/publish workflow visualization



---

**Last Updated**: 2025  
**Umbraco Version**: 17.2.0  
**.NET Version**: 10
