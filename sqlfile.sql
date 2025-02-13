create database expensetracker;

DELIMITER $
CREATE TRIGGER Tgr_Create_User_Totals AFTER INSERT
ON users
FOR EACH ROW
BEGIN
INSERT INTO total (`valueCard`, `valueWallet`, `userId`, `createdAt`, `updatedAt`)
VALUES (0, 0, NEW.id, current_timestamp(), current_timestamp());
END$
DELIMITER ;

DELIMITER $
CREATE TRIGGER Tgr_Remove_User_Totals AFTER DELETE
ON users
FOR EACH ROW
BEGIN
DELETE FROM total WHERE userId = OLD.id;
END$
DELIMITER ;

DELIMITER $
CREATE TRIGGER Tgr_Update_User_Totals_Increase AFTER INSERT
ON revenue
FOR EACH ROW
BEGIN
UPDATE total SET valueWallet = valueWallet + NEW.value WHERE userId = NEW.userId;
END$
DELIMITER ;

/*DELIMITER $
CREATE TRIGGER Tgr_Update_User_Totals_Decrease AFTER INSERT
ON payments
FOR EACH ROW
BEGIN
CALL Update_User_Totals(NEW.operationId, NEW.price, NEW.userId);
END$
DELIMITER ;

DELIMITER $
CREATE PROCEDURE Update_User_Totals(IN p_operationId INT, IN p_price DECIMAL, IN p_userId INT)
BEGIN
DECLARE v_name VARCHAR(10) DEFAULT "Pix";
SELECT name INTO v_name FROM operations WHERE id = p_operationId;
CASE
WHEN v_name = 'Cartão'
THEN UPDATE total SET valueCard = valueCard - p_price WHERE userId = p_userId;
WHEN v_name = 'Débito'
THEN UPDATE total SET valueWallet = valueWallet - p_price WHERE userId = p_userId;
WHEN v_name = 'Pix'
THEN UPDATE total SET valueWallet = valueWallet - p_price WHERE userId = p_userId;
END CASE;
END$
DELIMITER ;*/

select * from users;
select valueWallet-351.23 as bolas from total;
create database expensetracker;
select * from payments;
select sum(price) from payments where userId = 1 and invoice = true and createdAt like '%2025-02';
















