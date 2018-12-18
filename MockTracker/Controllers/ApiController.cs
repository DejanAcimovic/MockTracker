using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MockTracker.Models;
using MockTracker.Services;

namespace MockTracker.Controllers
{
    [Route("[controller]")]
    public class ApiController : Controller
    {
        private readonly ITimeSheet _timeSheetService;


        public ApiController(ITimeSheet service)
        {
            _timeSheetService = service;

        }

        [Route("timesheet/tasks")]
        public IActionResult Tasks()
        {
            return Ok(_timeSheetService.GetTaskTypes());
        }

        [Route("timesheet")]
        public IActionResult Timesheets()
        {
            return Ok(_timeSheetService.GetDayTasksheets());
        }




        [HttpPost]
        [Route("timesheet")]
        public IActionResult PostTodoItem([FromBody]DayTasksheet sheet)
        {

            _timeSheetService.addTimesheet(sheet);
            
            return Ok();
        }
    }
}
