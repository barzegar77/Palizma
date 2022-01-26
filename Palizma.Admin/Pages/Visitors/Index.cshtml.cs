using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Palizma.Application.Visitors.GetTodayReport;

namespace Palizma.Admin.Pages.Visitors
{
    public class IndexModel : PageModel
    {
        private readonly IGetTodayReportService _getTodayReportService;
        public ResultTodayReportDto ResultTodayReport;

        public IndexModel(IGetTodayReportService getTodayReportService)
        {
            _getTodayReportService = getTodayReportService;

        }
        public void OnGet()
        {
            ResultTodayReport = _getTodayReportService.Execute();
        }
    }
}
