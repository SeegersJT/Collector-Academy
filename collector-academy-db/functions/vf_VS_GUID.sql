USE `msb_learning_live`;
DROP function IF EXISTS `vf_VS_GUID`;

DELIMITER $$
USE `msb_learning_live`$$
CREATE FUNCTION `vf_VS_GUID` ()
RETURNS varchar(25)
BEGIN
	return upper(substring(replace(UUID(), '-', ''), 1, 25));
END$$

DELIMITER ;

