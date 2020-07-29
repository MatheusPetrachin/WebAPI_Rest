using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_Rest.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "{0} required")]
        [StringLength(45, MinimumLength = 1, ErrorMessage = "Tamanho do {0} deve ser entre {2} e {1}")]
        public string Name { get; set; }

        [Required(ErrorMessage = "{0} required")]
        [StringLength(45, MinimumLength = 1, ErrorMessage = "Tamanho do {0} deve ser entre {2} e {1}")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "{0} required")]
        [EmailAddress(ErrorMessage = "Enter an valid e-mail")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        
        public string Telephone { get; set; }

        public User()
        {
        }

        public User(int id, string name, string lastName, string email, DateTime birthDate, string telephone)
        {
            Id = id;
            Name = name;
            LastName = lastName;
            Email = email;
            Telephone = telephone;
        }
    }
}
