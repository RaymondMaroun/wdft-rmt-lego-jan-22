async function displayMissionPatches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches");
      const responseJson = await response.json();
      const firstObj = responseJson[0];
      console.log(firstObj);
   
    } catch (error) {
      // Handle error or a rejected Promise
      console.log("Something went wrong!", error);
    }
  }

  displayMissionPatches();
  