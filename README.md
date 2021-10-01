# machinetranslation-MALAS

Architecture:
 Node JS send data to Lamafunction (azure function). Lama Function save data in cosmos DB 

 Python code retrieve data from Cosmos DB to be processed for machine translation in seerver with GPU 


Web is deveoped by using Node Js and deployed in firebase

SQL_Python is developed in Python

Lama_function is developed in C# to connect website to cosmos DB

live code 

https://malas-e12fb.web.app/


sources 

https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-your-first-function-visual-studio?tabs=in-process&pivots=programming-runtime-functions-v3

https://docs.microsoft.com/en-us/azure/cosmos-db/sql/sql-api-get-started