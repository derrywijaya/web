using System;
using System.Collections.Generic;
using System.Text;

namespace LamaFunctions
{
    public class UploadedData
    {
        public string id { get; set; }
        public string email { get; set; }
        public string sourceLangId { get; set; }
        public string sourceLangDesc { get; set; }
        public string sourceLang { get; set; }
        public string destLangId { get; set; }
        public string destLang { get; set; }
        public string destLangDesc { get; set; }
        public string sourceToDestDic { get; set; }
        public string destToSourceDic { get; set; }
        public bool completed { get; set; }
        public bool partitionKey { get; set; }

    }
}
