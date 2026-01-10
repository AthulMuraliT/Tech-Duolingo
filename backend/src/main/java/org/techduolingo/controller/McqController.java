package org.techduolingo.controller;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class McqController {

    private final McqService mcqService;

    public McqController(McqService mcqService) {
        this.mcqService = mcqService;
    }

    // GET MCQs for game
    @GetMapping("/topics/{topicId}/mcqs")
    public List<McqResponseDto> getMcqs(@PathVariable Long topicId) {
        return mcqService.getMcqsByTopic(topicId);
    }

    // POST validate answer
    @PostMapping("/mcqs/validate")
    public McqSubmitResponse validate(@RequestBody McqSubmitRequest request) {
        return mcqService.validateAnswer(request);
    }
}
