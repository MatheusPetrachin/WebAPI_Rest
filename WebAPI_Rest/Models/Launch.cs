using System;

namespace WebAPI_Rest.Models
{
    public class Launch
    {
        public int Id { get; set; }
        public int LaunchTypeId { get; set; }
        public int ExpenseTypeId { get; set; }
        public decimal Value { get; set; }
        public DateTime LaunchDate { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
    }
}