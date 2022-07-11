<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TopSeriesRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TopSeriesRepository::class)
 * @ApiResource()
 */
class TopSeries
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups("topSeries")
     */
    private $id_serie;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("topSeries")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("topSeries")
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("topSeries")
     */
    private $release_date;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="topSeries")
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdSerie(): ?int
    {
        return $this->id_serie;
    }

    public function setIdSerie(int $id_serie): self
    {
        $this->id_serie = $id_serie;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getReleaseDate(): ?string
    {
        return $this->release_date;
    }

    public function setReleaseDate(string $release_date): self
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
