function switchCourses() {
    const login = true;
    let course = "Python";
    let region = "USA";

    if(!login) {
        console.log("Login is not correct");
        return;
    };

    switch (course) {
        case "JS":
            console.log("Welcome to JS!");
            switch (region) {
                case "USA":
                    console.log("Wake up early!");
                    break;
                case "Ukraine":
                    console.log("Don't be late");
                    break;
            }
            break;
        case "Python":
            console.log("Go to Python");
            switch (region) {
                case "USA":
                    console.log("Wake up early!");
                    break;
                case "Ukraine":
                    console.log("Don't be late");
                    break;
            }
            break;
        default:
            console.log("Unknown course");
    }
}

switchCourses();
