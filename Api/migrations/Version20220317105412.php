<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220317105412 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD roles JSON NOT NULL, ADD password VARCHAR(255) NOT NULL, CHANGE email email VARCHAR(255) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE top_movies CHANGE name name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE picture picture VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE release_date release_date VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE top_series CHANGE name name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE picture picture VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE release_date release_date VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74 ON user');
        $this->addSql('ALTER TABLE user DROP roles, DROP password, CHANGE firstname firstname VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE picture picture VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE icon icon VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE city city VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE profession profession VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description description VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE email email VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE want_to_see want_to_see VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE quest_1 quest_1 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE quest_2 quest_2 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE quest_3 quest_3 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE quest_4 quest_4 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE quest_5 quest_5 LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
