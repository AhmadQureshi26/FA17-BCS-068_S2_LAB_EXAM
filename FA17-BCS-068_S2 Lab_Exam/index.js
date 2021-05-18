$(function() {
    loadResult();

    $("#page-1").click(function(){
        $.ajax({
            url: "https://reqres.in/api/users?page=1 ",
            method: "GET",
            error: function(response) {
              var testResults = $("#testResults");
              testResults.html("An Error has occured");
            },
            success: function(response) {
              console.log(response.data);
              var testResults = $("#testResults");
              testResults.empty();
              for (var i = 0; i < response.data.length; i++) {
                var result = response.data[i];
                testResults.append(
                  `<div class="displayResults" data-id="${result.id}"><h3>Name: ${result.first_name} ${result.last_name}</h3><p>Email: ${result.email}</p><a href="${result.avatar}" target="_blank">Click to see Avatar</a></div>`
                );
              }
            }
          });
      });

    $("#page-2").click(function(){
        $.ajax({
            url: "https://reqres.in/api/users?page=2 ",
            method: "GET",
            error: function(response) {
              var testResults = $("#testResults");
              testResults.html("An Error has occured");
            },
            success: function(response) {
              console.log(response.data);
              var testResults = $("#testResults");
              testResults.empty();
              for (var i = 0; i < response.data.length; i++) {
                var result = response.data[i];
                testResults.append(
                  `<div class="displayResults" data-id="${result.id}"><h3>Name: ${result.first_name} ${result.last_name}</h3><p>Email: ${result.email}</p><a href="${result.avatar}" target="_blank">Click to see Avatar</a></div>`
                );
              }
            }
          });
      });
    $("#testResults").on("click", "#page-2", loadRecipies2);
    });

  function loadResult() {
    $.ajax({
      url: "https://reqres.in/api/users?page=1 ",
      method: "GET",
      error: function(response) {
        var testResults = $("#testResults");
        testResults.html("An Error has occured");
      },
      success: function(response) {
        console.log(response.data);
        var testResults = $("#testResults");
        testResults.empty();
        for (var i = 0; i < response.data.length; i++) {
          var result = response.data[i];
          testResults.append(
            `<div class="displayResults" data-id="${result.id}"><h3>Name: ${result.first_name} ${result.last_name}</h3><p>Email: ${result.email}</p><a href="${result.avatar}" target="_blank">Click to see Avatar</a></div>`
          );
        }
      }
    });
  }

