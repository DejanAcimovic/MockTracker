using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using MockTracker.DB;
using MockTracker.Models;

namespace MockTracker
{
    public class Program
    {
        public static void Main(string[] args)
        {
           

            InMemoryContext.AddType(new TaskType() { TaskTypeId = 1, Name = "Programiranje", Description = "Opisasfas" });
            InMemoryContext.AddType(new TaskType() { TaskTypeId = 2, Name = "Sastanak", Description = "Opisasfas" });
            InMemoryContext.AddType(new TaskType() { TaskTypeId = 3, Name = "Review", Description = "Opisasfas" });


            InMemoryContext.AddSheet(new DayTasksheet() { TaskSheetId = 1, Task = InMemoryContext.GetTaskTypes()[0], Billable = true, Date = DateTime.Now, Duration = 4.5M });
            InMemoryContext.AddSheet(new DayTasksheet() { TaskSheetId = 2, Task = InMemoryContext.GetTaskTypes()[1], Billable = true, Date = DateTime.Now, Duration = 1.5M });
            InMemoryContext.AddSheet(new DayTasksheet() { TaskSheetId = 3, Task = InMemoryContext.GetTaskTypes()[2], Billable = false, Date = DateTime.Now, Duration = 1.0M });

            CreateWebHostBuilder(args).Build().Run();

        }


        

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
