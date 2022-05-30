function getBotResponse(_input) {
    var response = _input.toLowerCase().replaceAll("  ", " ").replaceAll("?", "");
    switch (response.toLowerCase()) {
        case "hello":
        case "hi":
        case "hey":
            return "Hello there!";;

        case "good bye":
        case "goodbye":
            return "Talk to you later!";

        case "what is your name":
            return "My name is eeve";

        case "what is your favorite color":
            return "My favorite color is blue";

        case "what is your favorite food":
            return "My favorite food is samosa";

        case "what is your favorite movie":
            return "My favorite movie is Star Wars";
        case "what is your favorite song":
            return "My favorite song is The Sign";
        case "what is your favorite sport":
            return "My favorite sport is soccer";
        case "what is your favorite band":
            return "My favorite band is Metallica";
        case "what is your favorite book":
            return "My favorite book is The Hobbit";
        case "what is your favorite game":
            return "My favorite game is Fortnite";
        case "what is your favorite animal":
            return "My favorite animal is a dog";
     
        case "rock": return "paper";
        case "paper": return "scissors";
        case "scissors": return "rock";
        case "scissor": return "rock";
    
        case "hearted": return "Thank you!";
      
        case "share": 
        return "Share me with your friends! click here..";

        case "help": return "You can ask me-"
            + "what is your name" + "?\n"
            + "what is your favorite color" + "?\n"
            + "what is your favorite food" + "?\n"
            + "what is your favorite movie" + "?\n"
            + "what is your favorite song" + "?\n"
            + "what is your favorite sport" + "?\n"
            + "what is your favorite band" + "?\n"
            + "what is your favorite book" + "?\n"
            + "what is your favorite game" + "?\n"
            + "what is your favorite animal" + "?\n"
            + "\n Or I can play rock-paper-scissors with you! type 'rock', 'paper', or 'scissors'\n"
            + "\n Or type 'search on [youtube|google|duckduckgo] for [your query]' to search on youtube, google, or duckduckgo\n"

        default: {

            if (response.includes("search on youtube for ")) {
                window.location.href = "https://www.youtube.com/results?search_query=" +
                    response.replace("search on youtube for ", "").replace(" ", "+");
                return "searching";
            }
            if (response.includes("search on google for ")) {
                window.location.href = "https://www.google.com/search?q=" +
                    response.replace("search on google for ", "").replace(" ", "+");
                return "searching";
            }

            if (response.includes("search on duckduckgo for ")) {
                window.location.href = "https://duckduckgo.com/?q=" +
                    response.replace("search on duckduckgo for ", "").replace(" ", "+");
                return "searching";
            }

            if (response.includes("browse ")) {
                window.location.href = "https://" + response.replace("browse ", "").replace(" ", "").replace("https://", "").replace("http://", "");
                return "searching";
            }

            return "I don't understand. Try again.";
        }
    }
}