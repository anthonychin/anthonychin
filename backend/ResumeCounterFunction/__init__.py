import logging

import azure.functions as func

def main(req: func.HttpRequest, inputCountDoc: func.DocumentList, outputCountDoc:func.Out[func.Document]) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    if inputCountDoc:
        count = getNewCounterValue(inputCountDoc[0]['count'])
        index  = inputCountDoc[0]
    
    inputCountDoc[0]['count'] = count
    
    outputCountDoc.set(func.Document.from_json(inputCountDoc[0].to_json()))

    if count:
        return func.HttpResponse(f"{inputCountDoc[0]['count']}", status_code=200)
    else:
        return func.HttpResponse(
             "Error",
             status_code=500
        )

def getNewCounterValue(value: int):
    return value + 1