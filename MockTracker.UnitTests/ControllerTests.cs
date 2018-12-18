using System;
using Xunit;
using MockTracker.Models; 
using MockTracker.Services;


namespace MockTracker.UnitTests
{
    public class ControllerTests
    {
        [Fact]
        public void AddTasksheets()
        {
             //s obzirom da ne postoji perzistencija podataka, nema potrebe kreirati mock servis
            TimeSheetService servis = new TimeSheetService();

            DayTasksheet neki = new DayTasksheet();
            
            for(int i=0; i<10; i++)
            {
                servis.addTimesheet(neki); 
            }

            Assert.Equal(10, servis.GetDayTasksheets().Count);
        }
    }

}
