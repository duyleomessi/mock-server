const express = require('express')
const app = express()

const khong_uu_tien_gan_bien_khong_gan_entity = {
	"messages": [
		{
			"type": "text",
			"content": {
				"text": "Hello from duy dep trai"
			}
		},
        {
            "type": "form",
            "content": {
                "title": "Test form card",
                "properties": [
                    {
                        "type": "text",
                        "title": "test_vn_phone",
                        "caption": "Nhap sdt",
						"prompt": {
							"caption": "Nhap lai sdt"
						},
                        "entity": null
                    },
					{
                        "type": "text",
                        "title": "currency",
                        "caption": "Nhap don vi tien te",
						"prompt": {
							"caption": "Nhap lai don vi tien te"
						},

                        "entity": null
                    }
                ],
				"force_assign_variable": 0
            }
        },
		{
			"type": "text",
			"content": {
				"text": "Message behind Form"
			}
		}
    ],
    "set_attributes": {
        "name": "duy dep trai"
    }
}

const uu_tien_gan_bien_khong_gan_entity = {
	"messages": [
		{
			"type": "text",
			"content": {
				"text": "Hello from duy dep trai"
			}
		},
        {
            "type": "form",
            "content": {
                "title": "Test form card",
                "properties": [
                    {
                        "type": "text",
                        "title": "test_vn_phone",
                        "caption": "Nhap sdt",
						"prompt": {
							"caption": "Nhap lai sdt"
						},
                        "entity": null
                    },
					{
                        "type": "text",
                        "title": "currency",
                        "caption": "Nhap don vi tien te",
						"prompt": {
							"caption": "Nhap lai don vi tien te"
						},

                        "entity": null
                    }
				],
				"force_assign_variable": 1
            }
        },
		{
			"type": "text",
			"content": {
				"text": "Message behind Form"
			}
		}

    ],
    "set_attributes": {
        "name": "duy dep trai"
    }
}

const khong_uu_tien_gan_bien_co_set_entity = {
	"messages": [
		{
			"type": "text",
			"content": {
				"text": "Hello from duy dep trai"
			}
		},
        {
            "type": "form",
            "content": {
                "title": "Test form card",
                "properties": [
                    {
                        "type": "text",
                        "title": "test_vn_phone_set_entity",
                        "caption": "Nhap sdt",
						"prompt": {
							"caption": "Nhap lai sdt"
						},
                        "entity": ""
                    },
					{
                        "type": "text",
                        "title": "currency_set_entity",
                        "caption": "Nhap don vi tien te",
						"prompt": {
							"caption": "Nhap lai don vi tien te"
						},

                        "entity": ""
                    }
                ],
				"force_assign_variable": 0
            }
        },
		{
			"type": "text",
			"content": {
				"text": "Message behind Form"
			}
		}
    ],
    "set_attributes": {
        "name": "duy dep trai"
    }
}

const uu_tien_gan_bien_co_set_entity = {
	"messages": [
		{
			"type": "text",
			"content": {
				"text": "Hello from duy dep trai"
			}
		},
        {
            "type": "form",
            "content": {
                "title": "Test form card",
                "properties": [
                    {
                        "type": "text",
                        "title": "test_vn_phone_set_entity",
                        "caption": "Nhap sdt",
						"prompt": {
							"caption": "Nhap lai sdt"
						},
                        "entity": ""
                    },
					{
                        "type": "text",
                        "title": "currency_set_entity",
                        "caption": "Nhap don vi tien te",
						"prompt": {
							"caption": "Nhap lai don vi tien te"
						},

                        "entity": ""
                    }
                ],
				"force_assign_variable": 1
            }
        },
		{
			"type": "text",
			"content": {
				"text": "Message behind Form"
			}
		}

    ],
    "set_attributes": {
        "name": "duy dep trai"
    }
}

app.post("/khong_uu_tien_gan_bien_khong_gan_entity", (req, res) => {
    return res.status(200).json(khong_uu_tien_gan_bien_khong_gan_entity)
})

app.post("/uu_tien_gan_bien_khong_gan_entity", (req, res) => {
    return res.status(200).json(uu_tien_gan_bien_khong_gan_entity)
})

app.post("/khong_uu_tien_gan_bien_co_set_entity", (req, res) => {
    return res.status(200).json(khong_uu_tien_gan_bien_co_set_entity)
})

app.post("/uu_tien_gan_bien_co_set_entity", (req, res) => {
    return res.status(200).json(uu_tien_gan_bien_co_set_entity)
})

app.listen(process.env.PORT || 3001, function () {
    console.log("server listen on port 3001")
})


