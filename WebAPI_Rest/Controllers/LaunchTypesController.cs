using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI_Rest.Models;

namespace WebAPI_Rest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LaunchTypesController : ControllerBase
    {
        private readonly Context _context;

        public LaunchTypesController(Context context)
        {
            _context = context;
        }

        // GET: api/LaunchTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LaunchType>>> GetLaunchTypes()
        {
            return await _context.LaunchTypes.ToListAsync();
        }

        // GET: api/LaunchTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LaunchType>> GetLaunchType(int id)
        {
            var launchType = await _context.LaunchTypes.FindAsync(id);

            if (launchType == null)
            {
                return NotFound();
            }

            return launchType;
        }

        // PUT: api/LaunchTypes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLaunchType(int id, LaunchType launchType)
        {
            if (id != launchType.Id)
            {
                return BadRequest();
            }

            _context.Entry(launchType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LaunchTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LaunchTypes
        [HttpPost]
        public async Task<ActionResult<LaunchType>> PostLaunchType(LaunchType launchType)
        {
            _context.LaunchTypes.Add(launchType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLaunchType", new { id = launchType.Id }, launchType);
        }

        // DELETE: api/LaunchTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LaunchType>> DeleteLaunchType(int id)
        {
            var launchType = await _context.LaunchTypes.FindAsync(id);
            if (launchType == null)
            {
                return NotFound();
            }

            _context.LaunchTypes.Remove(launchType);
            await _context.SaveChangesAsync();

            return launchType;
        }

        private bool LaunchTypeExists(int id)
        {
            return _context.LaunchTypes.Any(e => e.Id == id);
        }
    }
}
