var usersRepeater = by.repeater("user in vm.users track by user.id");

module.exports = {
    newUser: element(by.css('[ui-sref="user-management.new"]')),
    header: element.all(by.css('h2')).first(),
    users: {
        rows: element.all(usersRepeater),

        count: function() {
            return this.rows.count();
        },

        // We should also allow retrieval by values within columns, and not just by index.
        row: function(index) {
            var row = usersRepeater.row(index);

            return {
                id: element(row.column("user.id")),
                login: element(row.column("user.login")),
                email: element(row.column("user.email"))
            }
        }
    }
};
