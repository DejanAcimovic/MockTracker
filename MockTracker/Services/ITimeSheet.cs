using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MockTracker.Models;

namespace MockTracker.Services
{
    public  interface ITimeSheet
    {
        List<TaskType> GetTaskTypes();
    }
}
