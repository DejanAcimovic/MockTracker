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
        private readonly ITimeSheet _service;

        public ApiController(ITimeSheet service)
        {
            _service = service;
        }
        
        [Route("timesheet/tasks")]
        public IActionResult Tasks()
        {
            return Ok(_service.GetTaskTypes());
        }

        [HttpGet]
        [Route("timesheet")]
        public IActionResult Timesheets()
        {
            return Ok(_service.GetTaskTypes());
        }

        [HttpPost]
        [Route("timesheet")]
        public IActionResult PutTimesheet(){

            return Ok();
        }
    }
}
