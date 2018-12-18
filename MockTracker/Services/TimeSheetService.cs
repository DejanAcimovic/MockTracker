using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MockTracker.Models;
using MockTracker.DB;

namespace MockTracker.Services
{
    public class TimeSheetService: ITimeSheet
    {
        public List<DayTasksheet> GetDayTasksheets() {
            return InMemoryContext.GetSheets();

        }

        public List<TaskType> GetTaskTypes() {
           return InMemoryContext.GetTaskTypes();
        }

        public bool addTimesheet(DayTasksheet sheet)
        {
            InMemoryContext.AddSheet(sheet);
            return true;
        }
    }
}
