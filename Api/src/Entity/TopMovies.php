<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TopMoviesRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TopMoviesRepository::class)
 * @ApiResource()
 */
class TopMovies
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups("topMovies")
     */
    private $id_movie;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("topMovies")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("topMovies")
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("topMovies")
     */
    private $release_date;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="top_movies")
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdMovie(): ?int
    {
        return $this->id_movie;
    }

    public function setIdMovie(int $id_movie): self
    {
        $this->id_movie = $id_movie;

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
