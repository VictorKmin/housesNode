const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
  try {

      const HouseModel = dataBase.getModel('House');
      if (!HouseModel) throw new Error('Base not connected');

      const id = req.params.id;
      if (!id) throw new Error('Bad request');

      const house = await HouseModel.findOne({
          where: {
              id
          }
      });

      if (!house) throw new Error('Not found');

      res.json({
          success: true,
          message: house
      })

  }  catch (e) {
      res.json({
          success: false,
          message: e.message
      })
  }
};
