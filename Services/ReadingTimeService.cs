public class ReadingTimeService : IReadingTimeService
{
    private const int WordsPerMinute = 100;

    public int Calculate(string content)
    {
        if (string.IsNullOrWhiteSpace(content)) return 1;

        var wordCount = content.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
        return Math.Max(1, wordCount / WordsPerMinute);
    }
}