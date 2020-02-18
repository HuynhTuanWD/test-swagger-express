const initializeEndpoints = app => {
  /**
   * @swagger
   *
   * /users:
   *   get:
   *     description: Login to the application
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: username
   *         description: Username to use for login.
   *         in: formData
   *         required: true
   *         type: string
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *      examples:
   * - name: username
   *   value: 1
   *     responses:
   *       200:
   *         description: login
   */

  app.get("/users", (req, res) => {
    console.log("voday");
    res.json({ message: "all users" });
  });
  /**
   * @swagger
   *
   * /user:
   *   get:
   *     description: Login to the application
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: login
   */
  app.get("/user/:id", (req, res) => res.end(`user id =${req.params.id}`));
};

module.exports = initializeEndpoints;
