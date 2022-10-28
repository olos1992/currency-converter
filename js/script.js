{

    const calculateSubmit = () => {

        const amountIn = document.querySelector(".js-amountIn");
        const currencyIn = document.querySelector(".js-currencyIn");
        const currencyOut = document.querySelector(".js-currencyOut");

        switch (currencyIn.value + currencyOut.value) {
            case "PLNPLN":
            case "EUREUR":
            case "USDUSD":
                return (amountIn.value * 1);

            case "PLNEUR":
                return (amountIn.value * 0.207);

            case "PLNUSD":
                return (amountIn.value * 0.204);

            case "EURPLN":
                return (amountIn.value * 4.81);

            case "EURUSD":
                return (amountIn.value * 0.99);

            case "USDPLN":
                return (amountIn.value * 4.89);

            case "USDEUR":
                return (amountIn.value * 1.01);
        }
    }

    const updateResultSubmit = () => {

        const amountOut = document.querySelector(".js-amountOut");

        amountOut.value = (calculateSubmit()).toFixed(2);

    }

    const onFormSubmit = (event) => {

        event.preventDefault();

    }

    const calculateInput = () => {

        const amountInInput = document.querySelector(".js-amountInInput");
        const currencyInInput = document.querySelector(".js-currencyInInput");
        const currencyOutInput = document.querySelector(".js-currencyOutInput");

        switch (currencyInInput.value + currencyOutInput.value) {
            case "PLNPLN":
            case "EUREUR":
            case "USDUSD":
                return (amountInInput.value * 1);

            case "PLNEUR":
                return (amountInInput.value * 0.207);

            case "PLNUSD":
                return (amountInInput.value * 0.204);

            case "EURPLN":
                return (amountInInput.value * 4.81);

            case "EURUSD":
                return (amountInInput.value * 0.99);

            case "USDPLN":
                return (amountInInput.value * 4.89);

            case "USDEUR":
                return (amountInInput.value * 1.01);
        }

    }

    const updateResultInput = () => {

        const amountOutInput = document.querySelector(".js-amountOutInput");

        amountOutInput.value = (calculateInput()).toFixed(2);

    }

    const init = () => {

        const formElementSubmit = document.querySelector(".js-formS");

        formElementSubmit.addEventListener("submit", () => {
            calculateSubmit();
            updateResultSubmit();
            onFormSubmit(event);
        });

        const formElementInput = document.querySelector(".js-formI");

        formElementInput.addEventListener("input", updateResultInput);
    }

    init();

};