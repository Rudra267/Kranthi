// emailjs account pending

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("add");
const product = document.getElementById("product");
const req = document.getElementById("req");
const msg = document.getElementById("msg");


function sendEmail() {
    if (!name.value || !email.value || !phone.value || !address.value || !product.value || !req.value || !msg.value) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `Try to fill out the empty box in the form`,
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        const bodyMessage = `
            Name: ${name.value}
            Email: ${email.value}
            Phone: ${phone.value}
            Address: ${address.value}
            Product of Interest: ${product.value}
            Energy Requirement: ${req.value}
            Message: ${msg.value}
        `;

        const param = {
            to_name: "KS - Customer Support Team",
            from_name: "KS - Customer Service Team",
            message: bodyMessage
        };

        const service_Id = "service_y8nbvic";
        const template_Id = "template_cvnwjpa";

        emailjs.send(service_Id, template_Id, param)
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `We will reach out to contact you`,
                    showConfirmButton: false,
                    timer: 1500
                });

                // Optionally clear fields
                document.getElementById("contactForm").reset();
            })
            .catch((err) => console.log(err));
    }
}



