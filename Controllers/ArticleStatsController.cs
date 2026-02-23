using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Services;

[ApiController]
[Route("umbraco/management/api/articles")]
public class ArticleStatsController : ControllerBase
{
    private readonly IContentService _contentService;
    private readonly IContentTypeService _contentTypeService;

    public ArticleStatsController(IContentService contentService, IContentTypeService contentTypeService)
    {
        _contentService = contentService;
        _contentTypeService = contentTypeService;
    }

    [HttpGet]
    public IActionResult GetStats()
    {
        var contentType = _contentTypeService.Get("article");
        if (contentType == null)
        {
            var emptyData = new
            {
                total = 0,
                latest = Enumerable.Empty<string>()
            };
            return Ok(emptyData);
        }

        var articles = _contentService.GetPagedOfTypes(new[] { contentType.Id }, 0, 100, out long total, filter: null);

        var data = new
        {
            total = total,
            latest = articles.Take(5).Select(x => x.Name)
        };

        return Ok(data);
    }
}