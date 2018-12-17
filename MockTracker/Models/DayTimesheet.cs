using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MockTracker.Models
{
    public class DayTasksheet
    {
        public int TaskSheetId { get; set; }
        public TaskType Task { get; set; }
        public decimal Duration { get; set; }
        public DateTime Datum { get; set; }
        public bool Billable { get; set; }

    }
}