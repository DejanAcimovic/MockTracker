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
    public class HomeController : Controller
    {
         private readonly ITimeSheet _service;

        public HomeController(ITimeSheet service)
        {
            _service = service;
        }
        
        public IActionResult Tasks()
        {
            return Ok(_service.GetTaskTypes());
        }

    }
}
