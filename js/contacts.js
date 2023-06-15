const $contactForm = document.querySelector('.form');

$contactForm.addEventListener('submit', handleSubmit);

async function handleSubmit(e){
    //щоб запобігти оновленню сторінки під час надсилання
    e.preventDefault();

    const $form = e.target,
        $full_name = $form.querySelector('#full_name'),
        $email = $form.querySelector('#email'),
        $message = $form.querySelector('#message'),
        response = await fetch(
            'https://api.apispreadsheets.com/data/pOnbO6WpVJZpWZOK/', 
            {
                method: 'POST',
                body: JSON.stringify({
                    data:{
                        full_name: $full_name.value,
                        email: $email.value,
                        message: $message.value
                    }
                })
            }
        )

    if(response.status === 201) alert('Form Submitted Successfully !')
    else alert('Please Try Again !')

    $form.reset();

}

// https://api.apispreadsheets.com/data/pOnbO6WpVJZpWZOK/