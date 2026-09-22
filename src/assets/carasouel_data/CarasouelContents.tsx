import carouselImage1 from "../carasouel_images/1-GPT Image 2 (high)-generation-1.png";
import carouselImage2 from "../carasouel_images/2 -Nano Banana 2 (Gemini 3-1 Flash Image Preview)-generation-1.png";
import carouselImage3 from "../carasouel_images/3-GPT Image 2 (high)-generation-1.png";
import carouselImage4 from "../carasouel_images/4-GPT Image 2 (high)-generation-1.png";
import carouselImage5 from "../carasouel_images/5-GPT Image 2 (high)-generation-1.png";
import carouselImage6 from "../carasouel_images/6-GPT Image 2 (high)-generation-1.png";

const CarasouelContents = [
    {
        id: 1,
        title: "1. Agentic AI Harness for Distributed Infrastructure",
        description: "A secure orchestration harness that governs how autonomous AI agents interact with infrastructure end-to-end. Agent-to-agent (A2A) communication is routed through a closed-loop, encrypted data path so that no intermediate data leaves the trusted boundary. The harness centralizes:",
        points: [
            "Orchestration — task delegation, agent lifecycle management, and dependency resolution across multiple concurrent agents",
            "Monitoring & observability — real-time tracing of agent decisions, tool calls, and inter-agent messages for auditability and debugging",
            "Security — closed-loop data flow with encryption in transit, scoped credentials, and isolation boundaries between agents to prevent data leakage or privilege escalation",
        ],
        techStack: "Tech: Agentic AI frameworks, secure messaging/queues, container isolation, observability/tracing tooling",
        image: carouselImage1,
    },
    {
        id: 2,
        title: "2. Hugging Face–Based Agentic Workflow Automation",
        description: "A modular, reusable agentic workflow framework built on Hugging Face models, designed to be plugged into different business functions without re-architecting the pipeline. Shipped workflows include:",
        points: [
            "HR automation — resume screening, candidate Q&A, and onboarding task generation",
            "Financial analysis — automated report parsing, trend extraction, and summarized insights",
            "General operations — configurable agent pipelines for repetitive cross-team tasks",
            "The framework abstracts prompt orchestration, tool-calling, and model selection so new use cases can be onboarded by configuration rather than new code.",
        ],
        techStack: "Tech: Hugging Face Transformers/Inference, agent orchestration, task-specific fine-tuning/prompting",
        image: carouselImage2,
    },
    {
        id: 3,
        title: "3. GPU-Accelerated Compute Platform (Docker + NVIDIA CUDA)",
        description: "Containerized compute platform for running heavy, GPU-bound workloads at scale. Docker-based pods are provisioned with NVIDIA CUDA runtimes to serve on-device and server-side ML inference under sustained high load, with resource scheduling tuned for GPU utilization and pod density.",
        points: [
            "Pod-level resource isolation and autoscaling for bursty ML workloads",
            "CUDA-optimized containers for inference/training throughput",
            "Load-aware scheduling to maximize GPU utilization across pods",
        ],
        techStack: "Tech: Docker, NVIDIA CUDA, Kubernetes/pod orchestration, GPU resource scheduling",
        image: carouselImage3,
    },
    {
        id: 4,
        title: "4. Advanced React Interfaces for Complex Web Applications",
        description: "A set of high-performance, production-grade UI systems built in React for applications with non-trivial state and interaction complexity — dashboards, multi-step workflows, and data-dense views.",
        points: [
            "Component architecture optimized for reusability and performance (memoization, code-splitting, virtualization)",
            "Complex state management for real-time and multi-step flows",
            "Accessible, responsive UI suited for enterprise-grade web apps",
        ],
        techStack: "Tech: React, modern state management, performance optimization patterns",
        image: carouselImage4,
    },
    {
        id: 5,
        title: "5. API Load Testing & Optimization",
        description: "Load-testing framework to validate API resilience and latency under both sustained heavy traffic and sudden burst conditions. Includes benchmarking, bottleneck identification, and iterative optimization of endpoints, caching, and connection handling to keep response times stable under stress.",
        points: [
            "Simulated sustained load and burst-traffic scenarios",
            "Latency/throughput benchmarking and regression tracking",
            "Optimization of caching, connection pooling, and query paths based on findings",
        ],
        techStack: "Tech: Load-testing tools, API profiling, caching strategies",
        image: carouselImage5,
    },
    {
        id: 6,
        title: "6. Enterprise System Architecture & Platform Patterns",
        description: "Hands-on system architecture across microservices, monolithic, and serverless models — designing platforms that match product stage, team shape, and operational reality instead of defaulting to a single blueprint. Work spans reference architectures, production rollouts, and the automation that keeps them maintainable at scale:",
        points: [
            "Microservices & distributed systems — domain-driven service boundaries, async messaging, API gateways, resilience patterns (retries, circuit breakers), and end-to-end observability across services",
            "Monolithic & modular architectures — strategic monoliths and modular monolith designs when cohesion, velocity, and simpler operations outweigh distribution; clear module seams for future extraction when needed",
            "Serverless & event-driven — FaaS and managed compute for spiky workloads, event buses and streaming pipelines for decoupled integrations, and cost-aware scaling without idle capacity tax",
            "Architecture automation — infrastructure as code, CI/CD promotion flows, environment parity, and operational runbooks that turn design decisions into repeatable, auditable delivery",
            "Architecture choices are documented with explicit trade-offs — latency, cost, blast radius, and team ownership — so stakeholders understand why the system is shaped the way it is.",
        ],
        techStack: "Tech: Microservices, modular monoliths, serverless (FaaS/containers), event streaming/message queues, Kubernetes, Terraform/IaC, CI/CD & platform automation",
        image: carouselImage6,
    },
];

export default CarasouelContents;
