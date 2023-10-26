document.addEventListener("DOMContentLoaded", function() {
    const payButton = document.getElementById("payButton");

    payButton.addEventListener("click", function() {
        const selectedTea = document.getElementById("teaOptions").value;
        const price = getPrice(selectedTea);

        alert(`You selected ${selectedTea} for $${price}. Payment processing would go here.`);
    });

    function getPrice(tea) {
        switch (tea) {
            case "green-tea":
                return 299;
            case "black-tea":
                return 249;
            case "herbal-tea":
                return 349;
            default:
                return 0;
        }
    }
});