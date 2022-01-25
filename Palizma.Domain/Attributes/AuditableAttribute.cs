using System;
using System.Collections.Generic;
using System.Text;

namespace Palizma.Domain.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class AuditableAttribute:Attribute
    {
    }
}
