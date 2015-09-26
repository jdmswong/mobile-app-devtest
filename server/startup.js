Meteor.startup(function(){

  // Create admin and user 1 if no users
  if (Meteor.users.find().count() === 0) {
    console.log("No users, (admin,admin) created");
    Accounts.createUser({
      username: "admin",
      email: "admin@admin.com",
      password: "admin",
      profile: {
        name: "Admin",
        face: HT_LOGO_PATH
      }
    });

    Accounts.createUser({
      username: "user1",
      email: "user1@user1.com",
      password: "user1",
      profile: {
        name: "User 1",
        face: PLACEHOLDER_IMG_PATH
      }
    });

  }

  // Create our initial room if none present
  if (Rooms.find().count() === 0){

    var roomId = Rooms.insert({
      name: "Chat Room",
      messages: []
    });

    console.log("No rooms, creating room "+roomId);
  }

});