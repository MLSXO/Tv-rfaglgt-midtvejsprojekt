-- DDL til ligasystemet
-- Forudsætter, at databasen pokemon og tabellen trainer allerede findes.

USE pokemon;

-- -----------------------------------------------------
-- Table: league
-- Indeholder ligaernes grundoplysninger.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS league (
                                      league_id INT NOT NULL AUTO_INCREMENT,
                                      league_name VARCHAR(100) NOT NULL,
    region VARCHAR(100) NULL,
    description VARCHAR(500) NULL,

    PRIMARY KEY (league_id),
    UNIQUE KEY uq_league_name (league_name)
    )
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4
    COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table: league_trainer
-- Forbinder trainers og ligaer i en mange-til-mange-relation.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS league_trainer (
                                              league_id INT NOT NULL,
                                              trainer_id INT NOT NULL,
                                              joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

                                              PRIMARY KEY (league_id, trainer_id),

    CONSTRAINT fk_league_trainer_league
    FOREIGN KEY (league_id)
    REFERENCES league (league_id)
    ON DELETE CASCADE,

    CONSTRAINT fk_league_trainer_trainer
    FOREIGN KEY (trainer_id)
    REFERENCES trainer (trainer_id)
    ON DELETE CASCADE
    )
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4
    COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table: battle
-- Indeholder planlagte, afsluttede og aflyste ligakampe.
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS battle (
                                      battle_id INT NOT NULL AUTO_INCREMENT,
                                      league_id INT NOT NULL,
                                      trainer_one_id INT NOT NULL,
                                      trainer_two_id INT NOT NULL,
                                      winner_id INT NULL,
                                      battle_date DATETIME NULL,
                                      status ENUM('scheduled', 'completed', 'cancelled')
    NOT NULL DEFAULT 'scheduled',

    PRIMARY KEY (battle_id),

    CONSTRAINT fk_battle_league
    FOREIGN KEY (league_id)
    REFERENCES league (league_id)
    ON DELETE CASCADE,

    CONSTRAINT fk_battle_trainer_one
    FOREIGN KEY (trainer_one_id)
    REFERENCES trainer (trainer_id),

    CONSTRAINT fk_battle_trainer_two
    FOREIGN KEY (trainer_two_id)
    REFERENCES trainer (trainer_id),

    CONSTRAINT fk_battle_winner
    FOREIGN KEY (winner_id)
    REFERENCES trainer (trainer_id)
    ON DELETE SET NULL
    )
    ENGINE = InnoDB
    DEFAULT CHARACTER SET = utf8mb4
    COLLATE = utf8mb4_0900_ai_ci;
