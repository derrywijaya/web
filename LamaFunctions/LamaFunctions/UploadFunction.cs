using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;

namespace LamaFunctions
{
    public static class UploadFunction
    {


        //[FunctionName("Function1")]
        //public static async Task<IActionResult> Run(
        //    [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        //    ILogger log)
        //{
        //    log.LogInformation("C# HTTP trigger function processed a request.");

        //    string name = req.Query["name"];

        //    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        //    dynamic data = JsonConvert.DeserializeObject(requestBody);
        //    name = name ?? data?.name;

        //    string responseMessage = string.IsNullOrEmpty(name)
        //        ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
        //        : $"Hello, {name}. This HTTP triggered function executed successfully.";

        //    return new OkObjectResult(responseMessage);
        //}

        [FunctionName("upload-data")]
        public static async Task<IActionResult> uploadData(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "upload-data")] HttpRequest req,
        ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["name"];

            UploadedData uploadedData = new UploadedData();
            //uploadedData.id = ;
            uploadedData.completed = false;
            uploadedData.partitionKey = false;

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            //name = name ?? data?.name;

            uploadedData.id = data["id"];
            uploadedData.sourceLang = data["sourceLang"];
            uploadedData.sourceLangId = data["sourceLangId"];
            uploadedData.sourceLangDesc = data["sourceLangDesc"];
            uploadedData.destLang = data["destLang"];
            uploadedData.destLangDesc = data["destLangDesc"];
            uploadedData.destLangId = data["destLangId"];
            uploadedData.destToSourceDic = data["destToSourceDic"];
            uploadedData.sourceToDestDic = data["sourceToDestDic"];
            uploadedData.email = data["email"];

            DataAccess dataAccess = new DataAccess();
            await dataAccess.InitiateDataBase();
            await dataAccess.AddItemsToContainerAsync(uploadedData);
            

            //string responseMessage = string.IsNullOrEmpty(name)
            //    ? "This HTTP trigge";red function executed successfully. Pass a name in the query string or in the request body for a personalized response."
            //    : $"Hello, {name}. This HTTP triggered function executed successfull

            return new OkResult();
        }

       
    }
}
