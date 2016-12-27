/*!***************************************************
 * diacritics
 * http://diacritics.io/
 * Copyright (c) 2016, Julian Motz
 * Released under the MIT license https://git.io/vXg2H
 *****************************************************/
{
    "title": "Language File Schema",
    "type": "object",
    "properties": {
        "metadata": {
            "type": "object",
            "properties": {
                "alphabet": {
                    "type": "string",
                    "pattern": "^[A-Z]{1}[a-z]{3}$"
                },
                "continent": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "pattern": "^(AF|AS|EU|NA|SA|OC|AN)$"
                    }
                },
                "language": {
                    "type": "string",
                    "pattern": "^[A-Za-z]+$"
                },
                "variant": {
                    "type": "string",
                    "pattern": "^[A-Za-z ,\\-\\(\\)\\'\\.]+$"
                },
                "native": {
                    "type": "string",
                    "pattern": "^[\\S]+$"
                },
                "source": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "format": "uri"
                    },
                    "uniqueItems": true
                }
            },
            "required": ["alphabet", "continent", "language", "native"]
        },
        "data": {
            "type": "object",
            "additionalProperties": {
                "type": "object",
                "properties": {
                    "mapping": {
                        "type": "object",
                        "properties": {
                            "base": {
                                "type": "string",
                                "pattern": "^[\\S]{1}$"
                            },
                            "decompose": {
                                "type": "string",
                                "pattern": "^[\\S]+$"
                            }
                        }
                    }
                },
                "required": ["mapping"]
            }
        }
    },
    "required": ["metadata", "data"]
}
