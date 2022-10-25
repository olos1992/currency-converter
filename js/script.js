{

    const calculateSubmit = () => {

        const amountIn = document.querySelector(".js-amountIn");
        const currencyIn = document.querySelector(".js-currencyIn");
        const currencyOut = document.querySelector(".js-currencyOut");

        if (currencyIn.value === "PLN" && currencyOut.value === "PLN") {
            return amountIn.value
        } else if (currencyIn.value === "PLN" && currencyOut.value === "EUR") {
            return (amountIn.value * 0.207).toFixed(2)
        } else if (currencyIn.value === "PLN" && currencyOut.value === "USD") {
            return (amountIn.value * 0.204).toFixed(2)
        } else if (currencyIn.value === "EUR" && currencyOut.value === "PLN") {
            return (amountIn.value * 4.81).toFixed(2)
        } else if (currencyIn.value === "EUR" && currencyOut.value === "USD") {
            return (amountIn.value * 0.99).toFixed(2)
        } else if (currencyIn.value === "EUR" && currencyOut.value === "EUR") {
            return amountIn.value
        } else if (currencyIn.value === "USD" && currencyOut.value === "PLN") {
            return (amountIn.value * 4.89).toFixed(2)
        } else if (currencyIn.value === "USD" && currencyOut.value === "EUR") {
            return (amountIn.value * 1.01).toFixed(2)
        } else if (currencyIn.value === "USD" && currencyOut.value === "USD") {
            return amountIn.value
        }
    }

    const updateResult = () => {

        const amountOut = document.querySelector(".js-amountOut");

        amountOut.value = calculateSubmit();

    }

    const onFormSubmit = (event) => {

        event.preventDefault();

    }

    const init = () => {

        const formElementSubmit = document.querySelector(".js-formS");

        formElementSubmit.addEventListener("submit", onFormSubmit);
        formElementSubmit.addEventListener("submit", calculateSubmit);
        formElementSubmit.addEventListener("submit", updateResult);

    }
 
        init();

    };

    

    {

        const calculateInput = () => {

            const amountInInput = document.querySelector(".js-amountInInput");

            const currencyInVal = document.querySelector(".js-currencyInInput");
            const currencyOutVal = document.querySelector(".js-currencyOutInput");

            switch (currencyInVal.value + currencyOutVal.value) {
                case "PLNPLN":
                case "EUREUR":
                case "USDUSD":
                    return amountInInput.value;

                case "PLNEUR":
                    return (amountInInput.value * 0.207).toFixed(2);

                case "PLNUSD":
                    return (amountInInput.value * 0.204).toFixed(2);

                case "EURPLN":
                    return (amountInInput.value * 4.81).toFixed(2);

                case "EURUSD":
                    return (amountInInput.value * 0.99).toFixed(2);

                case "USDPLN":
                    return (amountInInput.value * 4.89).toFixed(2);

                case "USDEUR":
                    return (amountInInput.value * 1.01).toFixed(2);
            }

        }

        const updateResult = () => {

            const amountOutInput = document.querySelector(".js-amountOutInput");

            amountOutInput.value = calculateInput ();

        }

        const init = () => {

            const formElementInput = document.querySelector(".js-formI");

            formElementInput.addEventListener("input", calculateInput);
            formElementInput.addEventListener("input", updateResult);
        }

        init();

    }