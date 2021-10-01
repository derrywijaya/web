import os

settings = {
    'host': os.environ.get('ACCOUNT_HOST', '<need to get from from azure>'),
    'master_key': os.environ.get('ACCOUNT_KEY', '<need to get from azure>'),
    'database_id': os.environ.get('COSMOS_DATABASE', 'MntDB'),
    'container_id': os.environ.get('COSMOS_CONTAINER', 'UploadedData'),
}