import { Leaf, Heart, Users, Award, Sprout, Target, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  const milestones = [
    { year: "2018", title: "The Idea", description: "Dhruv discovers the power of millets during a wellness retreat." },
    { year: "2020", title: "First Kitchen", description: "Launched our first small-batch kitchen in Mumbai." },
    { year: "2022", title: "10K Families", description: "Reached 10,000 happy households across India." },
    { year: "2024", title: "Going National", description: "Expanded distribution to 50+ cities nationwide." },
  ];

  const values = [
    { icon: Sprout, title: "Rooted in Tradition", description: "Ancient grains, time-honored recipes, modern craft." },
    { icon: Heart, title: "Health First", description: "Every ingredient earns its place through nutrition." },
    { icon: Leaf, title: "Naturally Clean", description: "No preservatives, no shortcuts, no compromises." },
    { icon: Award, title: "Quality Promise", description: "FSSAI-certified kitchens with rigorous standards." },
  ];

  const team = [
    { name: "Dhruv Sharma", role: "Founder & CEO", initials: "DS" },
    { name: "Priya Patel", role: "Head of Nutrition", initials: "PP" },
    { name: "Arjun Menon", role: "Master Chef", initials: "AM" },
    { name: "Neha Reddy", role: "Community Lead", initials: "NR" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Our Story</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Banner */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <Badge className="bg-accent/20 text-accent-foreground hover:bg-accent/30 border-0">
                  <Leaf className="w-3 h-3 mr-1" /> Our Story
                </Badge>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                  Nourishing India,
                  <span className="block text-primary">
                    One Millet at a Time
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a personal wellness journey grew into a mission to bring
                  ancient supergrains back to modern Indian tables — deliciously and honestly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="turmeric" size="lg">
                    Meet the Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/shop">Explore Products</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={founderImage}
                  alt="Dhruv, founder of Dhruv's Millet Delight"
                  width={1600}
                  height={1000}
                  className="rounded-2xl shadow-strong w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 hidden md:block">
                  <Card className="card-fresh">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-turmeric/20 flex items-center justify-center">
                        <Users className="w-6 h-6 text-turmeric-ink" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">50K+</div>
                        <div className="text-xs text-muted-foreground">Happy Families</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Heritage */}
        <section className="py-16 md:py-20 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="card-fresh border-0">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To make wholesome, millet-based snacking an everyday joy — crafted with
                    integrity, sourced with care, and priced for every Indian family. We
                    believe healthy food should never feel like a compromise.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-fresh border-0">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-turmeric/20 flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-turmeric-ink" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    Our Heritage
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Millets have nourished the Indian subcontinent for over 5,000 years.
                    We honor that legacy by working directly with small farmers, preserving
                    heirloom varieties, and reviving grandmother's recipes for a new generation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">What We Stand For</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Values That Guide Every Bite
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="card-fresh border-0 text-center">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-14 h-14 mx-auto rounded-full gradient-fresh flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-20 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-turmeric/20 text-turmeric-foreground border-0 mb-4">
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Milestones Along the Way
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line for mobile, horizontal for desktop */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
              <div className="grid md:grid-cols-4 gap-8">
                {milestones.map((milestone, idx) => (
                  <div key={milestone.year} className="relative text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shadow-medium relative z-10">
                      {idx + 1}
                    </div>
                    <Card className="card-fresh border-0 mt-6">
                      <CardContent className="p-6 space-y-2">
                        <div className="text-2xl font-heading font-bold text-primary">
                          {milestone.year}
                        </div>
                        <h3 className="font-heading font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section id="team" className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-accent/20 text-accent-foreground border-0 mb-4">
                <Users className="w-3 h-3 mr-1" /> Meet the Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                The People Behind the Delight
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A small, passionate team of food lovers, nutritionists, and craftspeople.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="card-fresh border-0 text-center">
                  <CardContent className="p-6 space-y-4">
                    <Avatar className="w-24 h-24 mx-auto border-4 border-accent/30">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground font-heading text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 overflow-hidden">
              <div className="gradient-hero p-10 md:p-16 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                  Join Our Wellness Journey
                </h2>
                <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                  Taste the difference of honest, millet-first snacking.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="turmeric" size="lg" asChild>
                    <a href="/shop">Shop Our Range</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
