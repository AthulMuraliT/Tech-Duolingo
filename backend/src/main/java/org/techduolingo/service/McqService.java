package org.techduolingo.service;

@Service
public class McqService {

    private final McqRepository mcqRepository;

    public McqService(McqRepository mcqRepository) {
        this.mcqRepository = mcqRepository;
    }

    // Fetch MCQs for game (NO answers leaked)
    public List<McqResponseDto> getMcqsByTopic(Long topicId) {

        List<Mcq> mcqs = mcqRepository.findByTopicId(topicId);

        return mcqs.stream().map(mcq ->
                new McqResponseDto(
                        mcq.getId(),
                        mcq.getQuestion(),
                        mcq.getCodeSnippet(),
                        List.of(
                                mcq.getOption1(),
                                mcq.getOption2(),
                                mcq.getOption3(),
                                mcq.getOption4()
                        )
                )
        ).toList();
    }

    // Validate answer (core game logic)
    public McqSubmitResponse validateAnswer(McqSubmitRequest request) {

        Mcq mcq = mcqRepository.findById(request.getMcqId())
                .orElseThrow(() -> new RuntimeException("MCQ not found"));

        boolean isCorrect =
                mcq.getCorrectOption() == request.getSelectedOption();

        return new McqSubmitResponse(
                isCorrect,
                mcq.getCorrectOption()
        );
    }
}
