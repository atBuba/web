using Microsoft.AspNetCore.Mvc;
using CalculatorApp.Models;

public class CalculatorController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Calculate(CalculatorModel model)
    {
        if (model.Operation == "Add")
            model.Result = model.FirstNumber + model.SecondNumber;
        else if (model.Operation == "Subtract")
            model.Result = model.FirstNumber - model.SecondNumber;
        else if (model.Operation == "Multiply")
            model.Result = model.FirstNumber * model.SecondNumber;
        else if (model.Operation == "Divide")
        {
            if (model.SecondNumber == 0)
            {
                model.ErrorMessage = "Деление на ноль невозможно!";
                model.Result = null;
            }
            else
                model.Result = model.FirstNumber / model.SecondNumber;
        }

        return View("Index", model);
    }
}
