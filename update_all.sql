UPDATE vuraclub.notifications set data = 
JSON_MERGE_PATCH(`data`, '{"mass_message": 0}');
UPDATE vuraclub.notifications set data = 
JSON_MERGE_PATCH(`data`, '{"mass_message": 1}') WHERE data->"$.title" = 'WORK & TRAVEL SUNČANE VURE 2022.';
UPDATE vuraclub.notifications set data = 
JSON_MERGE_PATCH(`data`, '{"mass_message": 1}') WHERE data->"$.title" = 'Nova akcija putovanja';
UPDATE vuraclub.notifications set data = 
JSON_MERGE_PATCH(`data`, '{"mass_message": 1}') WHERE data->"$.title" = 'Isprike radi testne poruke!';
UPDATE vuraclub.notifications set data = 
JSON_MERGE_PATCH(`data`, '{"mass_message": 1}') WHERE data->"$.title" = 'Znate li što je to Sierra Work & Travel? 😉';
DELETE FROM vuraclub.notifications WHERE data->"$.title" = 'Isprike radi testne poruke!';
DELETE FROM vuraclub.notifications WHERE data->"$.title" = 'Nova akcija putovanja';
UPDATE `vuraclub`.`payments` SET `application_id` = '323', `user_id` = null, `sub_type` = 'Uplata za aplikaciju' WHERE (`id` = '202');
UPDATE `vuraclub`.`payments` SET `application_id` = '322', `user_id` = null, `sub_type` = 'Uplata za aplikaciju' WHERE (`id` = '200');
UPDATE `vuraclub`.`payments` SET `application_id` = '332', `user_id` = null, `sub_type` = 'Uplata za aplikaciju' WHERE (`id` = '198');
UPDATE `vuraclub`.`applications` SET `paid_amount` = '194000' WHERE (`id` = '332');
UPDATE `vuraclub`.`applications` SET `paid_amount` = '194000' WHERE (`id` = '322');
UPDATE `vuraclub`.`applications` SET `paid_amount` = '194000' WHERE (`id` = '323');
