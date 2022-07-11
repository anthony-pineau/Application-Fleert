<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ApiResource( 
 *  normalizationContext={"groups"={"topMovies", "topSeries", "user"}}
 * )
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("user")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("user")
     */
    private $picture;

    /**
     * @ORM\Column(type="smallint")
     * @Groups("user")
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("user")
     */
    private $icon;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("user")
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("user")
     */
    private $profession;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("user")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Groups("user")
     */
    private $email;

      /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */

    private $password;

    /**
     * @ORM\Column(type="integer")
     * @Groups("user")
     */
    private $phone_number;

    /**
     * @ORM\Column(type="smallint")
     * @Groups("user")
     */
    private $maximum_distance;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("user")
     */
    private $match_percentage;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("user")
     */
    private $want_to_see;

    /**
     * @ORM\Column(type="boolean")
     * @Groups("user")
     */
    private $display_my_profile;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("user")
     */
    private $quest_1;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("user")
     */
    private $quest_2;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("user")
     */
    private $quest_3;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("user")
     */
    private $quest_4;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("user")
     */
    private $quest_5;

    /**
     * @ORM\Column(type="smallint")
     * @Groups("user")
     */
    private $age_range_max;

    /**
     * @ORM\Column(type="smallint")
     * @Groups("user")
     */
    private $age_range_min;

    /**
     * @ORM\OneToMany(targetEntity=TopMovies::class, mappedBy="user")
     * @Groups("topMovies")
     */
    private $top_movies;

    /**
     * @ORM\OneToMany(targetEntity=TopSeries::class, mappedBy="user")
     * @Groups("topSeries")
     */
    private $topSeries;


    public function __construct()
    {
        $this->top_movies = new ArrayCollection();
        $this->topSeries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

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

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getProfession(): ?string
    {
        return $this->profession;
    }

    public function setProfession(?string $profession): self
    {
        $this->profession = $profession;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhoneNumber(): ?int
    {
        return $this->phone_number;
    }

    public function setPhoneNumber(int $phone_number): self
    {
        $this->phone_number = $phone_number;

        return $this;
    }

    public function getMaximumDistance(): ?int
    {
        return $this->maximum_distance;
    }

    public function setMaximumDistance(int $maximum_distance): self
    {
        $this->maximum_distance = $maximum_distance;

        return $this;
    }

    public function getMatchPercentage(): ?int
    {
        return $this->match_percentage;
    }

    public function setMatchPercentage(?int $match_percentage): self
    {
        $this->match_percentage = $match_percentage;

        return $this;
    }

    public function getWantToSee(): ?string
    {
        return $this->want_to_see;
    }

    public function setWantToSee(string $want_to_see): self
    {
        $this->want_to_see = $want_to_see;

        return $this;
    }

    public function getDisplayMyProfile(): ?bool
    {
        return $this->display_my_profile;
    }

    public function setDisplayMyProfile(bool $display_my_profile): self
    {
        $this->display_my_profile = $display_my_profile;

        return $this;
    }

    public function getQuest1(): ?string
    {
        return $this->quest_1;
    }

    public function setQuest1(?string $quest_1): self
    {
        $this->quest_1 = $quest_1;

        return $this;
    }

    public function getQuest2(): ?string
    {
        return $this->quest_2;
    }

    public function setQuest2(?string $quest_2): self
    {
        $this->quest_2 = $quest_2;

        return $this;
    }

    public function getQuest3(): ?string
    {
        return $this->quest_3;
    }

    public function setQuest3(?string $quest_3): self
    {
        $this->quest_3 = $quest_3;

        return $this;
    }

    public function getQuest4(): ?string
    {
        return $this->quest_4;
    }

    public function setQuest4(?string $quest_4): self
    {
        $this->quest_4 = $quest_4;

        return $this;
    }

    public function getQuest5(): ?string
    {
        return $this->quest_5;
    }

    public function setQuest5(?string $quest_5): self
    {
        $this->quest_5 = $quest_5;

        return $this;
    }

    public function getAgeRangeMax(): ?int
    {
        return $this->age_range_max;
    }

    public function setAgeRangeMax(int $age_range_max): self
    {
        $this->age_range_max = $age_range_max;

        return $this;
    }

    public function getAgeRangeMin(): ?int
    {
        return $this->age_range_min;
    }

    public function setAgeRangeMin(int $age_range_min): self
    {
        $this->age_range_min = $age_range_min;

        return $this;
    }

    /**
     * @return Collection<int, TopMovies>
     */
    public function getTopMovies(): Collection
    {
        return $this->top_movies;
    }

    public function addTopMovie(TopMovies $topMovie): self
    {
        if (!$this->top_movies->contains($topMovie)) {
            $this->top_movies[] = $topMovie;
            $topMovie->setUser($this);
        }

        return $this;
    }

    public function removeTopMovie(TopMovies $topMovie): self
    {
        if ($this->top_movies->removeElement($topMovie)) {
            // set the owning side to null (unless already changed)
            if ($topMovie->getUser() === $this) {
                $topMovie->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TopSeries>
     */
    public function getTopSeries(): Collection
    {
        return $this->topSeries;
    }

    public function addTopSeries(TopSeries $topSeries): self
    {
        if (!$this->topSeries->contains($topSeries)) {
            $this->topSeries[] = $topSeries;
            $topSeries->setUser($this);
        }

        return $this;
    }

    public function removeTopSeries(TopSeries $topSeries): self
    {
        if ($this->topSeries->removeElement($topSeries)) {
            // set the owning side to null (unless already changed)
            if ($topSeries->getUser() === $this) {
                $topSeries->setUser(null);
            }
        }

        return $this;
    }

        /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

}
