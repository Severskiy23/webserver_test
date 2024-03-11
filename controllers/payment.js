const ApiError = require('../error/API_error.js')
const db = require('../db.js');
class Payment {
    async makePayment(req, res, next) {
        const transaction = await db.sequelize.transaction();
        try {
          const {userID, amount} = req.body
            // Обертка в транзакцию для согласованности данных   
            // Списание баланса пользователя
            const user = await db.User.findByPk(userID, { transaction: transaction });
            if (!user) {
              throw new Error('Пользователь не найден');
            }
            user.balance -= amount;
           
            const negative_balance = user.balance
            if(negative_balance < 0)
              throw new Error('Не хватает средств');

            await user.save({ transaction: transaction });

            // Добавление записи в историю изменения платежей
            const historyResult = await db.PaymentHistory.create(
              { 'userId': user.id, action: 'payment', amount },
              { transaction: transaction }
            );
        
            await transaction.commit();
        
            res.json({ message: 'Операция выполнена успешно!', user, historyResult });
          } catch (error) {
            await transaction.rollback();
            return next(ApiError.badRequest(error.message))
          }
    console.log("payment controller")

    }
}
module.exports = new Payment();